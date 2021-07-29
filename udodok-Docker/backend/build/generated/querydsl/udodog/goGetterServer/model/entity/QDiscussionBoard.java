package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDiscussionBoard is a Querydsl query type for DiscussionBoard
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDiscussionBoard extends EntityPathBase<DiscussionBoard> {

    private static final long serialVersionUID = 1652629534L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDiscussionBoard discussionBoard = new QDiscussionBoard("discussionBoard");

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createAt = createDateTime("createAt", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath title = createString("title");

    public final QUser user;

    public QDiscussionBoard(String variable) {
        this(DiscussionBoard.class, forVariable(variable), INITS);
    }

    public QDiscussionBoard(Path<? extends DiscussionBoard> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDiscussionBoard(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDiscussionBoard(PathMetadata metadata, PathInits inits) {
        this(DiscussionBoard.class, metadata, inits);
    }

    public QDiscussionBoard(Class<? extends DiscussionBoard> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

